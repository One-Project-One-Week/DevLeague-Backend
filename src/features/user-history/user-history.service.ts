import prisma from "src/db/prisma";

export const showUserHistory = async (userId: string) => {
  try {
    const userHistory = await prisma.hackathon.findMany({
      where: {
        Register: {
          some: {
            Participant: {
              some: {
                participant_id: userId,
              },
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        start_date: true,
        end_date: true,
        Register: {
          where: {
            Participant: {
              some: {
                participant_id: userId,
              },
            },
          },
          select: {
            id: true,
            Submission: {
              select: {
                placement: true,
                repo_link: true,
              },
            },
          },
        },
      },
    });

    const flatData = userHistory.flatMap((hackathon) =>
      hackathon.Register.map((reg) => ({
        hackathon_id: hackathon.id,
        name: hackathon.name,
        start_date: hackathon.start_date,
        end_date: hackathon.end_date,
        submission_id: reg.id,
        repo_link: reg.Submission[0]?.repo_link ?? null,
        placement: reg.Submission[0]?.placement ?? null,
      }))
    );

    return flatData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch user history: ${error.message}`);
    }
    throw new Error("Failed to fetch user history");
  }
};
