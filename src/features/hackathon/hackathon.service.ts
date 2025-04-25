import prisma from "src/db/prisma";

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
};

export const createHackathon = async (data: HackathonData, files: any) => {
  const {
    name,
    max_teams,
    max_participants,
    min_participants,
    prize,
    prize_pool,
    overview,
    cover_image,
    profile_image,
    webinar_time,
    webinar_link,
    presentation_link,
    presentation_time,
    result_time,
    points_for_first_place,
    points_for_second_place,
    points_for_third_place,
    admin_id,
    start_date,
    end_date,
  } = data;

  const coverImageName = files.cover_image[0].filename;
  const coverImageFileUrl = `public/uploads/cover-images/${coverImageName}`;

  const profileImageName = files.profile_image[0].filename;
  const profileImageFileUrl = `public/uploads/profile-images/${profileImageName}`;

  if (!profileImageName) {
    throw new Error("Profile image is required");
  }
  if (!coverImageName) {
    throw new Error("Cover image is required");
  }

  try {
    const hackathon = await prisma.hackathon.create({
      data: {
        name,
        prize,
        overview,
        admin_id,
        webinar_link,
        presentation_link,
        max_teams: Number(max_teams),
        max_participants: Number(max_participants),
        min_participants: Number(min_participants),
        prize_pool: prize_pool ? Number(prize_pool) : undefined,
        points_for_first_place: Number(points_for_first_place),
        points_for_second_place: Number(points_for_second_place),
        points_for_third_place: Number(points_for_third_place),
        webinar_time: new Date(webinar_time),
        presentation_time: new Date(presentation_time),
        result_time: new Date(result_time),
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        cover_image: coverImageFileUrl,
        profile_image: profileImageFileUrl,
      },
    });

    return hackathon;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create hackathon: ${error.message}`);
    }
    throw new Error(
      "An unexpected error occurred while creating the hackathon"
    );
  }
};

export const getHackathons = async () => {
  try {
    const hackathons = await prisma.hackathon.findMany({
      orderBy: {
        start_date: "asc",
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
      "An unexpected error occurred while getting the hackathons"
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
      "An unexpected error occurred while getting the hackathon by id"
    );
  }
};

export const updateHackathon = async (
  id: string,
  data: HackathonData,
  files: any
) => {
  try {
    const {
      name,
      max_teams,
      max_participants,
      min_participants,
      prize,
      prize_pool,
      overview,
      cover_image,
      profile_image,
      webinar_time,
      webinar_link,
      presentation_link,
      presentation_time,
      result_time,
      points_for_first_place,
      points_for_second_place,
      points_for_third_place,
      admin_id,
      start_date,
      end_date,
    } = data;

    const coverImageName = files.cover_image[0].filename;
    const coverImageFileUrl = `public/uploads/cover-images/${coverImageName}`;

    const profileImageName = files.profile_image[0].filename;
    const profileImageFileUrl = `public/uploads/profile-images/${profileImageName}`;

    if (!profileImageName) {
      throw new Error("Profile image is required");
    }
    if (!coverImageName) {
      throw new Error("Cover image is required");
    }

    const hackathon = await prisma.hackathon.update({
      where: { id },
      data: {
        name,
        prize,
        overview,
        admin_id,
        webinar_link,
        presentation_link,
        max_teams: Number(max_teams),
        max_participants: Number(max_participants),
        min_participants: Number(min_participants),
        prize_pool: prize_pool ? Number(prize_pool) : undefined,
        points_for_first_place: Number(points_for_first_place),
        points_for_second_place: Number(points_for_second_place),
        points_for_third_place: Number(points_for_third_place),
        webinar_time: new Date(webinar_time),
        presentation_time: new Date(presentation_time),
        result_time: new Date(result_time),
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        cover_image: coverImageFileUrl,
        profile_image: profileImageFileUrl,
      },
    });
    return hackathon;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to update hackathon: ${error.message}`);
    }
    throw new Error(
      "An unexpected error occurred while updating the hackathon"
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
      "An unexpected error occurred while deleting the hackathon"
    );
  }
};
