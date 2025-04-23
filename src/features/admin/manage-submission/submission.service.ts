import prisma from 'src/db/prisma';

const getAllSubmissionByHackathonId = async function (hackathon_id: string) {
  const hackathon = await prisma.hackathon.findUnique({
    where: {
      id: hackathon_id,
    },
  });
  if (!hackathon) throw new Error('Unknown Hackathon');
  const submissions = await prisma.submission.findMany({
    select: {
      id: true,
      repo_link: true,
      hackathon: {
        select: {
          name: true,
        },
      },
      register: {
        select: {
          team: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    where: {
      hackathon_id,
    },
  });
  const result = submissions.map((sub) => {
    return {
      id: sub.id,
      repo_link: sub.repo_link,
      hackathon_title: sub.hackathon.name,
      team_name: sub.register.team,
    };
  });
  return result;
};

export default { getAllSubmissionByHackathonId };
