import axios from "axios";

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface Group {
  name: string;
  tasks: Task[];
}

const api =
  "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

export const ProgressService = {
  getMockProgress: () => {
    return axios.get<Group[]>(api, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};
