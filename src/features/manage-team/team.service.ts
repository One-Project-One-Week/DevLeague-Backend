import prisma from 'src/db/prisma';

export const joinTeam = async (teamId: string, userId: string) => {
  try {
    const maxTeamMembers = 10;

    // Check if the team exists
    const team = await prisma.team.findUnique({
      where: { id: teamId },
      include: { members: true },
    });

    if (!team) {
      throw new Error('Team not found.');
    }

    // Check if the user is already in a team
    const user = await prisma.user.findFirst({
      where: { id: userId },
      select: { team_id: true, username: true },
    });
    if (user?.team_id) {
      throw new Error('User is already a member of a team.');
    }

    // Check if the user is a leader of another team
    const isLeader = await prisma.team.findFirst({
      where: { leader_id: userId },
    });

    if (isLeader) {
      throw new Error('Team leaders cannot join another team.');
    }

    // Check team member limit
    if (team.members.length >= maxTeamMembers) {
      throw new Error('This team is full.');
    }

    // All validations passed: Add user to team
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        team_id: teamId,
      },
    });

    return updatedUser;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(`Failed to join team: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while joining the team');
  }
};

type TeamData = {
  name: string;
  leader_id: string;
};

export const createTeam = async (
  team: TeamData,
  leader_id: string,
  files: any
) => {
  try {
    const profileImageName = files.profile_image[0].filename;
    const profileImageFileUrl = `uploads/profile-images/${profileImageName}`;
    const newTeam = await prisma.team.create({
      data: {
        name: team.name,
        leader_id: leader_id,
        profile_image: profileImageFileUrl,
      },
    });
    const updatedUser = await prisma.user.update({
      data: {
        team_id: newTeam.id,
      },
      where: {
        id: leader_id,
      },
    });
    return newTeam;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create team: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while creating the team');
  }
};

export const getTeams = async () => {
  try {
    const teams = await prisma.team.findMany({
      include: {
        _count: {
          select: {
            members: true,
          },
        },
      },
    });
    return teams;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get teams: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while getting the teams');
  }
};

export const getTeamById = async (id: string) => {
  try {
    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        leader: true,
        members: true,
      },
    });
    if (!team) {
      throw new Error('Team not found');
    }
    return team;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get team by id: ${error.message}`);
    }
    throw new Error(
      'An unexpected error occurred while getting the team by id'
    );
  }
};

export const updateTeam = async (id: string, files: any) => {
  try {
    const profileImageName = files.profile_image[0].filename;
    const profileImageFileUrl = `public/uploads/profile-images/${profileImageName}`;
    const updatedTeam = await prisma.team.update({
      where: { id },
      data: {
        profile_image: profileImageFileUrl,
      },
    });
    return updatedTeam;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to update team: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while updating the team');
  }
};
