import axios from "axios";

const blogExists = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get(`/api/auth/exists?email=${email}`);
    return response.data.exists;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default blogExists;
