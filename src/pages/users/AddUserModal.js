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
import { Controller } from "react-hook-form"

const AddUserModal = ({
  handleCloseAddUserModal,
  opened,
  handleSubmit,
  register,
  errors,
  isSubmitting,
  onSubmit,
  control,
  userType
}) => {
  const [allGroups, setAllGroups] = useState([])

  // useEffect(() => {
  //   axiosInstanceNoAuth
  //     .get("/groups/")
  //     .then((res) => {
  //       let groupResults = res.data.results;
  //       // If user is Admin, filter out Superadmin
  //       if (userType === "Admin") {
  //         groupResults = groupResults.filter((group) => group.name !== "Superadmin");
  //       }
  //       const updatedGrpArray = groupResults.map((r) => ({
  //         label: r.name,
  //         value: r.id,
  //       }));
  //       setAllGroups(updatedGrpArray);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    if (!userType) return;
    axiosInstanceNoAuth
      .get("/groups/")
      .then((res) => {
        let groupResults = res.data.results;

        if (userType === "Admin") {
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
  }, [userType]);

  return (
    <ManModal
      opened={opened}
      onClose={handleCloseAddUserModal}
      title="Add User"
      centered
    >
      <ManBox maw={400} mx="auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MuiTextInput
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
export default AddUserModal
