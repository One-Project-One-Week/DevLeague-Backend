import prisma from 'src/db/prisma';

const getAllSubmissionByHackathonId = async function (hackathon_id: string) {
  const hackathon = await prisma.hackathon.findUnique({
    where: {
      id: hackathon_id,
    },
  });
  if (!hackathon) throw new Error('Unknown Hackathon');
  const registers = await prisma.register.findMany({
    select: {
      id: true,
      Submission: {
        select: {
          id: true,
          repo_link: true,
          placement: true,
          feedback: true,
        },
      },
      team: {
        select: {
          name: true,
        },
      },
    },
    where: {
      hackathon_id,
    },
  });
  // const submissions = await prisma.submission.findMany({
  //   select: {
  //     id: true,
  //     repo_link: true,
  //     hackathon: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //     register: {
  //       select: {
  //         team: {
  //           select: {
  //             name: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   where: {
  //     hackathon_id,
  //   },
  // });
  const result = registers.map((register) => {
    return {
      id: register.id,
      subId: register.Submission.length < 1 ? null : register.Submission[0].id,
      placement:
        register.Submission.length < 1
          ? null
          : register.Submission[0].placement,
      feedback:
        register.Submission.length < 1 ? null : register.Submission[0].feedback,
      repo_link:
        register.Submission.length < 1
          ? null
          : register.Submission[0].repo_link,
      team_name: register.team.name,
    };
  });
  return result;
};

const updateSubmissionById = async function (
  submission_id: string,
  place: string,
  feedback: string
) {
  const submission = await prisma.submission.findUnique({
    where: {
      id: submission_id,
    },
  });
  const submissions = await prisma.submission.findFirst({
    where: {
      hackathon_id: submission?.hackathon_id,
    },
  });
  console.log(submissions);
  if (!submissions || !submission) {
    return false;
  }
  // get point
  const point = await prisma.hackathon.findUnique({
    select: {
      points_for_first_place: true,
      points_for_second_place: true,
      points_for_third_place: true,
    },
    where: {
      id: submission.hackathon_id,
    },
  });
  let incrementPoint = 0;
  if (place === '1st' && point?.points_for_first_place) {
    incrementPoint = +point.points_for_first_place;
  } else if (place === '2nd' && point?.points_for_second_place) {
    incrementPoint = +point.points_for_second_place;
  } else if (place === '3rd' && point?.points_for_third_place) {
    incrementPoint = +point.points_for_third_place;
  }
  // update submission
  const updatedSubmission = await prisma.submission.update({
    data: {
      placement: place,
      feedback,
    },
    where: {
      id: submission_id,
    },
  });
  // give point
  const user = await prisma.user.updateMany({
    data: {
      points: {
        increment: incrementPoint,
      },
    },
  });
  if (!updatedSubmission) return false;
  return updatedSubmission;
};

export default { getAllSubmissionByHackathonId, updateSubmissionById };
