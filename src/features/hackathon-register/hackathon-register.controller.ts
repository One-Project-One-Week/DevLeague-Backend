import { Request, Response } from "express";
import { StatusCodes } from "../../utils/StatusCodes";
import { addNewRegister } from "./hackathon-register.service";

export const addRegisterController = async function (
  req: Request,
  res: Response
) {
  try {
    const userId = req.userId;
    const { hackathon_id } = req.params;
    const { selectedMemberIds } = req.body;

    await addNewRegister(hackathon_id, userId, selectedMemberIds);

    res.status(StatusCodes.CREATED).json({
      message: "Register created successfully",
      data: {
        hackathon_id,
      },
    });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: (error as Error).message });
  }
};
