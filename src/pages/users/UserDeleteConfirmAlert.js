import {
  Modal as ManModal,
  Box as ManBox,
  Group as ManGroup,
  Button as ManButton,
} from "@mantine/core"

const UserDeleteConfirmAlert = ({
  handleUserDeleteAlertClose,
  userDeleteAlertOpened,
  handleUserDeleteSubmit,
  isDeleteUserSubmitting,
}) => {
  return (
    <ManModal
      opened={userDeleteAlertOpened}
      onClose={handleUserDeleteAlertClose}
      title="Delete User"
      centered
    >
      <ManBox maw={400} mx="auto">
        <ManBox>Are you sure you want to user this user?</ManBox>
        <ManBox sx={{ fontSize: "13px", color: "#333" }}>
          Once deleted this action cannot be undone.
        </ManBox>
        <ManGroup position="right" mt="md">
          <ManButton
            disabled={isDeleteUserSubmitting}
            onClick={handleUserDeleteSubmit}
            type="submit"
          >
            Submit
          </ManButton>
        </ManGroup>
      </ManBox>
    </ManModal>
  )
}
export default UserDeleteConfirmAlert
