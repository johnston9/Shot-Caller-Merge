import {
  Box as ManBox,
  Button as ManButton,
  Group as ManGroup,
} from "@mantine/core"
import { AiOutlinePlus } from "react-icons/ai"
import { useDisclosure } from "@mantine/hooks"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import AddUserModal from "./AddUserModal"
import { formSchema } from "./addUserFormValidation"
import { axiosInstance } from "../../api/axiosDefaults"
import axios from "axios"
import UserTable from "./UserTable"
import { toast } from "react-hot-toast"
import UserDeleteConfirmAlert from "./UserDeleteConfirmAlert"
import { CurrentUserContext, useCurrentUser } from "../../contexts/CurrentUserContext"
import EditUserModal from "./EditUserModal"

const ManageUsers = () => {
  const currentUser = useCurrentUser()
  const [opened, { open, close }] = useDisclosure(false)
  const [
    userDeleteAlertOpened,
    { open: userDeleteAlertOpen, close: userDeleteAlertClose },
  ] = useDisclosure(false)
  const [
    userEditFormOpened,
    { open: userEditFormOpen, close: userEditFormClose },
  ] = useDisclosure(false)
  const [totalUsersCount, setTotalUsersCount] = useState(0)
  const [users, setUsers] = useState(0)
  const [userToBeDeleted, setUserToBeDeleted] = useState(null)
  const [userToBeEditted, setUserToBeEditted] = useState(null)
  const [isDeleteUserSubmitting, setIsDeleteUserSubmitting] = useState(null)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const handleOpenAddUserModal = useCallback(() => {
    open()
  }, [open])

  const handleCloseAddUserModal = useCallback(() => {
    close()
  }, [close])

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
      const result = await axios.post(
        `/${localStorage.getItem("projectSlug")}/users/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      )
      toast.success("User added")
      reset()
      handleCloseAddUserModal()
      fetchUsers()
    } catch (error) {
      console.log("User creation failed: ", error.response)
      if (error.response.data.username.length > 0) {
        return toast.error(error.response.data.username[0])
      } else {
        return toast.error("Failed to add user!")
      }
    }
  }

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        `/${localStorage.getItem("projectSlug")}/users/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      )
      setTotalUsersCount(data.count)
      setUsers(data.results)
    } catch (error) {
      console.log("Failed to fetch users: ", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserDeleteAlertOpen = (row) => {
    setUserToBeDeleted(row)
    userDeleteAlertOpen()
  }

  const handleUserDeleteAlertClose = useCallback(() => {
    setUserToBeDeleted(null)
    userDeleteAlertClose()
  }, [userDeleteAlertClose])

  const handleUserDeleteSubmit = async () => {
    const userIdToBeDeleted = userToBeDeleted.original.id
    try {
      setIsDeleteUserSubmitting(true)
      const result = await axios.delete(
        `/${localStorage.getItem("projectSlug")}/users/${userIdToBeDeleted}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      )
      toast.success("User deleted")
      userDeleteAlertClose()
      setUserToBeDeleted(null)
      fetchUsers()
    } catch (error) {
      toast.error("User deletion failed")
    } finally {
      setIsDeleteUserSubmitting(false)
    }
  }

  const handleUserEditFormOpen = useCallback(
    (row) => {
      setUserToBeEditted(row)
      userEditFormOpen()
    },
    [userEditFormOpen]
  )

  const handleCloseEditUserModal = () => {
    setUserToBeEditted(null)
    userEditFormClose()
  }

  return (
    <>
      <AddUserModal
        handleCloseAddUserModal={handleCloseAddUserModal}
        opened={opened}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        control={control}
        userType={currentUser?.groups[0]?.name}
      />
      <EditUserModal
        initialData={userToBeEditted}
        userType={currentUser?.groups[0]?.name}
        userEditFormOpened={userEditFormOpened}
        handleCloseEditUserModal={handleCloseEditUserModal}
        fetchUsers={fetchUsers}
      />

      <UserDeleteConfirmAlert
        handleUserDeleteAlertClose={handleUserDeleteAlertClose}
        userDeleteAlertOpened={userDeleteAlertOpened}
        handleUserDeleteSubmit={handleUserDeleteSubmit}
        isDeleteUserSubmitting={isDeleteUserSubmitting}
      />

      <ManBox
        sx={(theme) => ({
          width: "100%",
          minHeight: "100%",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingTop: "3rem",
          "@media (max-width: 700px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        })}
      >
        <ManBox display="flex" sx={{ justifyContent: "space-between" }}>
          <div></div>
          <ManGroup>
            <ManButton
              leftIcon={<AiOutlinePlus />}
              onClick={handleOpenAddUserModal}
            >
              Add User
            </ManButton>
          </ManGroup>
        </ManBox>

        <ManBox sx={{ width: "100%", marginTop: "1rem" }}>
          {users.length <= 0 && <div>Loading...</div>}
          {users.length > 0 &&
            currentUser &&
            currentUser?.groups?.length > 0 && (
              <UserTable
                totalUsersCount={totalUsersCount}
                users={users}
                handleUserDeleteAlertOpen={handleUserDeleteAlertOpen}
                currentUser={currentUser}
                handleUserEditFormOpen={handleUserEditFormOpen}
              />
            )}
        </ManBox>
      </ManBox>
    </>
  )
}
export default ManageUsers
