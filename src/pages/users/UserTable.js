import { MantineReactTable, useMantineReactTable } from "mantine-react-table"
import { useEffect, useMemo } from "react"
import { ActionIcon, Box as ManBox } from "@mantine/core"
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

const UserTable = ({
  totalUsersCount,
  users,
  handleUserDeleteAlertOpen,
  currentUser,
  handleUserEditFormOpen,
}) => {
  const columns = useMemo(
    () => [
      {
        header: "Username",
        accessorKey: "username", //simple recommended way to define a column
        //more column options can be added here to enable/disable features, customize look and feel, etc.
      },
      {
        header: "Email",
        accessorKey: "email", //simple recommended way to define a column
        //more column options can be added here to enable/disable features, customize look and feel, etc.
      },
      {
        header: "First Name",
        accessorKey: "first_name", //simple recommended way to define a column
        //more column options can be added here to enable/disable features, customize look and feel, etc.
      },
      {
        header: "Last Name",
        accessorKey: "last_name", //simple recommended way to define a column
        //more column options can be added here to enable/disable features, customize look and feel, etc.
      },
      {
        header: "Phone Number",
        accessorKey: "phone_number", //simple recommended way to define a column
        //more column options can be added here to enable/disable features, customize look and feel, etc.
      },
      {
        header: "Call Time Username",
        accessorKey: "call_time_username", //simple recommended way to define a column
        //more column options can be added here to enable/disable features, customize look and feel, etc.
      },
      {
        id: "groups",
        header: "Role",
        accessorFn: (dataRow) => dataRow.groups[0].name, //alternate way to access data if processing logic is needed
      },
    ],
    []
  )

  //pass table options to useMantineReactTable
  const table = useMantineReactTable({
    columns,
    data: users, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // enableRowSelection: true, //enable some features
    enableColumnOrdering: true,
    enableGlobalFilter: false, //turn off a feature
    enableFullScreenToggle: false,
    positionActionsColumn: "last",
    enableRowActions: true,
    renderRowActions: ({ row }) => {
      const targetUser = row.original;
      const targetGroup = targetUser?.groups[0]?.name;
      const targetId = Number(targetUser?.id);
    
      const currentGroup = currentUser?.groups[0]?.name;
      const currentId = Number(currentUser?.pk);
    
      const isSelf = targetId === currentId;
    
      const isSuperadmin = currentGroup === "Superadmin";
      const isAdmin = currentGroup === "Admin";
    
      const canEditOrDelete =
        (isSuperadmin && !isSelf) || // Superadmin can edit/delete anyone except self
        (isAdmin && targetGroup !== "Superadmin"); // Admin can only edit/delete other Admins
    
      if (!canEditOrDelete) return null;
    
      return (
        <div className="d-flex">
          <ManBox sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
            <ActionIcon color="red" onClick={() => handleUserDeleteAlertOpen(row)}>
              <MdOutlineDelete />
            </ActionIcon>
          </ManBox>
          <ManBox sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
            <ActionIcon onClick={() => handleUserEditFormOpen(row)}>
              <MdOutlineEdit />
            </ActionIcon>
          </ManBox>
        </div>
      );
    }
    

  })
  return <MantineReactTable table={table} />
}
export default UserTable
