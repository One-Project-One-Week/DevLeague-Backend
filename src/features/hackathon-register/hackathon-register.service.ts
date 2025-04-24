import { Hackathon } from '@prisma/client';
import prisma from 'src/db/prisma';

const validateRegister = async function (
  hackathon_id: string,
  participants: string[]
) {
  const hackathon = await prisma.hackathon.findUnique({
    where: {
      id: hackathon_id,
    },
  });
  // validate hackathon
  if (!hackathon) throw new Error('Hackathon not found!');
  // validate max participant
  if (participants.length > hackathon.max_participants) {
    throw new Error('Exceed participant number');
  }
  // validate Is the hackathon full
  const registeredTeams = await prisma.register.count({
    where: {
      hackathon_id,
    },
  });
  if (registeredTeams >= hackathon.max_teams) {
    throw new Error('Max registed team!');
  }
  // validate is the participants free
  Promise.all(
    participants.map(async (participant) => {
      if (!isParticipantFree(hackathon, participant)) return;
      throw new Error(participant + ' is not free!');
    })
  );
  return true;
};

const addNewRegister = async function (hackathon_id: string, team_id: string) {
  const newRegister = await prisma.register.create({
    data: {
      hackathon_id,
      team_id,
    },
  });
  return newRegister;
};

const addPartcipants = async function (
  register_id: string,
  participantIds: string[]
) {
  const participants = Promise.all(
    participantIds.map(async (participantId) => {
      const user = await prisma.user.findUnique({
        where: {
          id: participantId,
        },
      });
      if (!user) throw new Error('Unknown participant!');
      const participant = await prisma.participant.create({
        data: {
          participant_id: user.id,
          register_id,
        },
      });
      return participant;
    })
  );
  return participants;
};

const isParticipantFree = async function (
  hackathon: Hackathon,
  participant_id: string
) {
  const participatedHackathons = await prisma.hackathon.findMany({
    where: {
      Register: {
        some: {
          Participant: {
            some: {
              participant_id,
            },
          },
        },
      },
    },
    select: {
      id: true,
      start_date: true,
      end_date: true,
    },
  });

  const isOverlapping = participatedHackathons.some((h) => {
    return (
      h.start_date <= hackathon.end_date && h.end_date >= hackathon.start_date
    );
  });

  if (isOverlapping) {
    return true;
  }
  return false;
};

export default { validateRegister, addNewRegister, addPartcipants };
