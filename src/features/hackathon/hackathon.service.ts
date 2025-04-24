import prisma from 'src/db/prisma';

type HackathonData = {
  name: string;
  max_teams: number;
  max_participants: number;
  min_participants: number;
  prize: string;
  prize_pool?: number;
  overview: string;
  cover_image: string;
  profile_image: string;
  webinar_time: Date;
  webinar_link: string;
  presentation_link: string;
  presentation_time: Date;
  result_time: Date;
  points_for_first_place: number;
  points_for_second_place: number;
  points_for_third_place: number;
  admin_id: string;
  start_date: Date;
  end_date: Date;
  register_point: number;
};

export const createHackathon = async (data: HackathonData) => {
  try {
    const hackathon = await prisma.hackathon.create({
      data: {
        ...data,
        regsiter_point: +data.register_point,
        max_participants: +data.max_participants,
        min_participants: +data.min_participants,
        max_teams: +data.max_teams,
        prize_pool: data.prize_pool ? +data.prize_pool : null,
        points_for_first_place: +data.points_for_first_place,
        points_for_second_place: +data.points_for_second_place,
        points_for_third_place: +data.points_for_third_place,
      },
    });

    return hackathon;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create hackathon: ${error.message}`);
    }
    throw new Error(
      'An unexpected error occurred while creating the hackathon'
    );
  }
};

export const getHackathons = async () => {
  try {
    const hackathons = await prisma.hackathon.findMany({
      orderBy: {
        start_date: 'asc',
      },
      select: {
        id: true,
        name: true,
        prize: true,
        prize_pool: true,
        overview: true,
        cover_image: true,
        profile_image: true,
        start_date: true,
        end_date: true,
      },
    });
    return hackathons;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get hackathons: ${error.message}`);
    }
    throw new Error(
      'An unexpected error occurred while getting the hackathons'
    );
  }
};

export const getHackathonById = async (id: string) => {
  try {
    const hackathon = await prisma.hackathon.findUnique({
      where: { id },
    });
    return hackathon;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get hackathon by id: ${error.message}`);
    }
    throw new Error(
      'An unexpected error occurred while getting the hackathon by id'
    );
  }
};

export const updateHackathon = async (id: string, data: HackathonData) => {
  try {
    const hackathon = await prisma.hackathon.update({
      where: { id },
      data,
    });
    return hackathon;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to update hackathon: ${error.message}`);
    }
    throw new Error(
      'An unexpected error occurred while updating the hackathon'
    );
  }
};

export const deleteHackathon = async (id: string) => {
  try {
    const hackathon = await prisma.hackathon.delete({
      where: { id },
    });
    return hackathon;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to delete hackathon: ${error.message}`);
    }
    throw new Error(
      'An unexpected error occurred while deleting the hackathon'
    );
  }
};
