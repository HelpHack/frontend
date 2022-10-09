import axios from "axios";

interface DirectionProps {
  startLat: string;
  startLng: string;
  endLat: string;
  endLng: string;
  numberOfProducts: string;
}

const API_URL =
  "http://a0a0bf189ef26434f86391ae396db414-1395592711.us-east-1.elb.amazonaws.com/";

const getDirection = async ({
  startLat,
  startLng,
  endLat,
  endLng,
  numberOfProducts,
}: DirectionProps) => {
  const response = await axios.get(
    `${API_URL}directions?startLat=${startLat}&startLng=${startLng}&endLat=${endLat}&endLng=${endLng}&type=driving&numberOfProducts=${numberOfProducts}`
  );
  return response.data;
};

const taskService = {
  getDirection,
};

export default taskService;
