import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Modal as ManModal,
  Box as ManBox,
  TextInput as MuiTextInput,
  Group as ManGroup,
  Button as ManButton,
  Select as ManSelect,
} from "@mantine/core"
import { useEffect, useState } from "react"

import ErrorText from "../../components/ErrorText"
import { axiosInstanceNoAuth } from "../../api/axiosDefaults"
import { formSchema } from "./addUserFormValidation"
import { toast } from "react-hot-toast"
import axios from "axios"

const EditUserModal = (initialData) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  })
  useEffect(() => {
    setValue("email", initialData?.initialData?.original?.email)
    setValue("username", initialData?.initialData?.original?.username)
    setValue("firstName", initialData?.initialData?.original?.first_name)
    setValue("lastName", initialData?.initialData?.original?.last_name)
    setValue(
      "callTimeUserName",
      initialData?.initialData?.original?.call_time_username
    )
    setValue("phoneNumber", initialData?.initialData?.original?.phone_number)
    setValue("groups", initialData?.initialData?.original?.groups[0]?.id)
  }, [initialData, setValue])

  const [allGroups, setAllGroups] = useState([])

  // useEffect(() => {
  //   axiosInstanceNoAuth
  //     .get("/groups/")
  //     .then((res) => {
  //       setTimeout(() => {
  //         let groupResults = res.data.results;
  //         // If user is Admin, filter out Superadmin
  //         if (initialData?.userType === "Admin") {
  //           groupResults = groupResults.filter((group) => group.name !== "Superadmin");
  //         }
  //         console.log(initialData?.userType)
  //         console.log(groupResults)
  //         const updatedGrpArray = groupResults.map((r) => ({
  //           label: r.name,
  //           value: r.id,
  //         }));
  //         setAllGroups(updatedGrpArray);
  //       },3000)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])
  useEffect(() => {
    if (!initialData?.userType) return;

    axiosInstanceNoAuth
      .get("/groups/")
      .then((res) => {
        let groupResults = res.data.results;

        if (initialData?.userType === "Admin") {
          groupResults = groupResults.filter(group => group.name !== "Superadmin");
        }

        const updatedGrpArray = groupResults.map((r) => ({
          label: r.name,
          value: r.id,
        }));

        setAllGroups(updatedGrpArray);
      })
      .catch((err) => {
        console.error("Error fetching groups:", err);
      });
  }, [initialData]);


  const onSubmit = async (data) => {
    const {
      callTimeUserName,
      email,
      firstName,
      lastName,
      groups,
      phoneNumber,
      username,
    } = data

    const body = {
      username,
      first_name: firstName,
      last_name: lastName,
      email,
      groups: [groups],
      call_time_username: callTimeUserName,
      phone_number: phoneNumber,
    }

    try {
      const result = await axios.patch(
        `/${localStorage.getItem("projectSlug")}/users/${initialData?.initialData?.original?.id
        }/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      )
      toast.success("User editted")
      reset()
      initialData?.handleCloseEditUserModal()
      initialData?.fetchUsers()
    } catch (error) {
      console.log("Failed to edit: ", error.response)
      if (error.response.data.username.length > 0) {
        return toast.error(error.response.data.username[0])
      } else {
        return toast.error("Failed to edit user!")
      }
    }
  }

  return (
    <ManModal
      opened={initialData?.userEditFormOpened}
      onClose={initialData?.handleCloseEditUserModal}
      title="Edit User"
      centered
    >
      <ManBox maw={400} mx="auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MuiTextInput
            disabled={true}
            name="email"
            withAsterisk
            label="Email"
            placeholder="Enter email"
            {...register("email")}
          />
          {errors.email && <ErrorText message={errors.email?.message} />}

          <MuiTextInput
            name="username"
            withAsterisk
            label="Username"
            placeholder="Enter username"
            {...register("username")}
            disabled={true}
          />
          {errors.username && <ErrorText message={errors.username?.message} />}

          <MuiTextInput
            name="firstName"
            withAsterisk
            label="First Name"
            placeholder="Enter First Name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <ErrorText message={errors.firstName?.message} />
          )}

          <MuiTextInput
            name="lastName"
            withAsterisk
            label="Last Name"
            placeholder="Enter Last Name"
            {...register("lastName")}
          />
          {errors.lastName && <ErrorText message={errors.lastName?.message} />}

          <MuiTextInput
            name="phoneNumber"
            withAsterisk
            label="Phone Number"
            placeholder="Enter Phone Number"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <ErrorText message={errors.phoneNumber?.message} />
          )}

          <MuiTextInput
            name="callTimeUserName"
            withAsterisk
            label="Call Time Username"
            placeholder="Enter Call Time Username"
            {...register("callTimeUserName")}
          />
          {errors.callTimeUserName && (
            <ErrorText message={errors.callTimeUserName?.message} />
          )}

          <Controller
            name="groups"
            control={control}
            render={({ field }) => (
              <ManSelect
                data={allGroups}
                value={field.value}
                onChange={(value) => field.onChange(value)}
                label="Role"
                // error={!!errors.grpups}
                // errorLabel={errors.groups && errors.groups.message}
                placeholder="Please select a role"
              />
            )}
          />

          {errors.groups && <ErrorText message={errors.groups?.message} />}
          <ManGroup position="right" mt="md">
            <ManButton disabled={isSubmitting} type="submit">
              Submit
            </ManButton>
          </ManGroup>
        </form>
      </ManBox>
    </ManModal>
  )
}
export default EditUserModal
