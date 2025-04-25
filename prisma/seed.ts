import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();
const saltRounds = process.env.SALT_ROUND ? +process.env.SALT_ROUND : 10;
async function main() {
  const admin = await generateAdmin();
  console.log("Admin seeded");
  const user = await generateUser();
  console.log("User seeded");
  const team = await generateTeam(user.id);
  console.log("Team seeded");
  console.log(admin.id);
  const hackathon = await generateHackathon(admin.id);
  console.log("Hackathon seeded");
  const register = await generateRegister(hackathon.id, team.id);
  console.log("Register seeded");
  const parti = await generateParticipant(user.id, register.id);
  console.log("Participant seeded");
  const submission = await generateSubmission(hackathon.id, register.id);
  console.log("Submission seeded");
}

async function generateAdmin() {
  const password = await hash("devleaguepassword", saltRounds);
  const admin = await prisma.admin.create({
    data: {
      full_name: "P2",
      email: "admin@devleague.org",
      password: password,
    },
  });
  return admin;
}
async function generateUser() {
  const userpassword = await hash("userpassword", saltRounds);
  const user = await prisma.user.create({
    data: {
      username: "Test User",
      email: "test@gmail.com",
      fullName: "Mg Mg",
      password: userpassword,
      date_of_birth: new Date("2025-09-07"),
      phone_number: "09-7777777",
      position: "backend-developer",
      points: 10,
    },
  });
  return user;
}

async function generateTeam(leader_id: string) {
  const team = await prisma.team.create({
    data: {
      name: "Test Team",
      leader_id,
    },
  });
  const updatedUser = await prisma.user.update({
    data: {
      team_id: team.id,
    },
    where: {
      id: leader_id,
    },
  });
  return team;
}

async function generateHackathon(admin_id: string) {
  const hackathon = await prisma.hackathon.create({
    data: {
      name: "Code Kya Mal",
      max_teams: 10,
      register_point: 10,
      max_participants: 5,
      min_participants: 1,
      prize: "lorem",
      overview: "this is code kya mal",
      cover_image: "https://example.com/image",
      profile_image: "https://example.com/image",
      webinar_link: "https://zoom.us/hhhh",
      webinar_time: new Date("2025-09-09"),
      presentation_link: "https://zoom.us/hhh",
      presentation_time: new Date("2025-10-10"),
      result_time: new Date("2025-10-10"),
      points_for_first_place: 30,
      points_for_second_place: 20,
      points_for_third_place: 10,
      admin_id: admin_id,
      start_date: new Date("2025-09-10"),
      end_date: new Date("2025-10-10"),
    },
  });
  return hackathon;
}

async function generateRegister(hackathon_id: string, team_id: string) {
  const register = await prisma.register.create({
    data: {
      team_id,
      hackathon_id,
    },
  });
  return register;
}

async function generateParticipant(user_id: string, register_id: string) {
  const participant = await prisma.participant.create({
    data: {
      participant_id: user_id,
      register_id,
    },
  });
  return participant;
}

async function generateSubmission(hackathon_id: string, register_id: string) {
  const submission = await prisma.submission.create({
    data: {
      repo_link: "https://github.com/",
      hackathon_id: hackathon_id,
      register_id: register_id,
    },
  });
  return submission;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
