export const organization={
    _info: "https://api.github.com/orgs/MACS-DTU",
    _repos: "https://api.github.com/orgs/MACS-DTU/repos",
    _members: "https://api.github.com/orgs/MACS-DTU/public_members"
};

// http helper function!
export const get=async (url) => {
    return (await (await fetch(url)).json());
};
