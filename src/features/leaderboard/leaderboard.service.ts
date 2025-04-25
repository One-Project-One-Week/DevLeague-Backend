import prisma from "src/db/prisma";

export const getLeaderboard = async () => {
  try {
    const leaderboard = await prisma.user.findMany({
      orderBy: {
        points: "desc",
      },
      select: {
        id: true,
        username: true,
        points: true,
      },
    });

    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw new Error("Could not fetch leaderboard");
  }
};
