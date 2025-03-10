import { useUsers } from "../../application/hooks/useUsers";

const DashboardHome = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <h1>Dashboard Home</h1>
    </div>
  );
};
export default DashboardHome;
