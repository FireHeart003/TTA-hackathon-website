import ProtectedPage from "@/components/ProtectedPage";
import Admins from "@/components/admin/dashboards/Admins";

const AdminPage = () => {
  return (
    <ProtectedPage title="Admin | Admins" restrictions={["admin"]}>
      <Admins />
    </ProtectedPage>
  );
};

export default AdminPage;
