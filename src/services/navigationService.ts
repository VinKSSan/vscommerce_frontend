let navigate: (path: string) => void;

export const setNavigate = (nav: (path: string) => void) => {
  navigate = nav;
};

export const navigateTo = (path: string) => {
  if (navigate) {
    navigate(path);
  } else {
    console.error("Navigate not defined!");
  }
};
