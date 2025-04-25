import prisma from "src/db/prisma";

type CreateSubmissionData = {
  repo_link: string;
  hackathon_id: string;
  register_id: string;
};

export const createSubmission = async (
  data: CreateSubmissionData,
  userId: string
) => {
  const isParticipant = await prisma.participant.findFirst({
    where: {
      participant_id: userId,
      register_id: data.register_id,
    },
  });

  if (!isParticipant) {
    throw new Error("You are not registered for this hackathon.");
  }

  const existing = await prisma.submission.findFirst({
    where: {
      register_id: data.register_id,
    },
  });

  if (existing) {
    throw new Error("A submission has already been made.");
  }

  // 3. Create submission
  const submission = await prisma.submission.create({
    data: {
      repo_link: data.repo_link,
      hackathon_id: data.hackathon_id,
      register_id: data.register_id,
    },
  });

  return submission;
};
