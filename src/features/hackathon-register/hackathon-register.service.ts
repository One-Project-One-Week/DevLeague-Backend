import prisma from "src/db/prisma";

export const addNewRegister = async function (
  hackathon_id: string,
  userId: string,
  selectedMemberIds: string[]
) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  const teamId = user?.team_id;

  if (!teamId) throw new Error("User is not a part of any team!");

  if (!Array.isArray(selectedMemberIds) || selectedMemberIds.length === 0)
    throw new Error("No team members selected for registration.");

  const hackathon = await prisma.hackathon.findUnique({
    where: { id: hackathon_id },
  });
  if (!hackathon) throw new Error("Hackathon not found!");

  const registeredTeams = await prisma.register.count({
    where: { hackathon_id },
  });
  if (registeredTeams >= hackathon.max_participants)
    throw new Error("Hackathon is full");

  const alreadyRegistered = await prisma.register.findFirst({
    where: {
      hackathon_id,
      team_id: teamId,
    },
  });
  if (alreadyRegistered) {
    throw new Error("Your team have already registered for this hackathon.");
  }

  // Validate that selected members belong to the team
  const validMembers = await prisma.user.findMany({
    where: {
      id: { in: selectedMemberIds },
      team_id: teamId,
    },
  });

  if (validMembers.length !== selectedMemberIds.length) {
    throw new Error("Some selected users are not part of your team!");
  }

  // Create Register
  const register = await prisma.register.create({
    data: {
      hackathon_id,
      team_id: teamId,
    },
  });

  await prisma.participant.createMany({
    data: validMembers.map((member) => ({
      participant_id: member.id,
      register_id: register.id,
    })),
  });

  await Promise.all(
    validMembers.map((member) =>
      prisma.user.update({
        where: { id: member.id },
        data: {
          points: {
            decrement: 10,
          },
        },
      })
    )
  );
};
