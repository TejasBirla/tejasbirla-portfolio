function usePathname() {
  return typeof window !== "undefined" ? window.location.pathname : "/";
}
function useRouter() {
  return {
    push: (url) => {
      if (typeof window !== "undefined") window.location.href = url;
    },
    back: () => {
      if (typeof window !== "undefined") window.history.back();
    }
  };
}
export {
  usePathname,
  useRouter
};
