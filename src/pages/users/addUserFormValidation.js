import { z } from "zod"

export const formSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  lastName: z.string().min(1, "Last name is required"),
  firstName: z.string().min(1, "First name is required"),
  groups: z.number().int().min(1, "Group is required"),
  callTimeUserName: z.string().min(1, "Call time username is required"),
  phoneNumber: z.string().min(1, "Phone number is require"),
})
