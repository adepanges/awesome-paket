export const isValidMd5 = (md5 = "") => {
    return /^[a-f0-9]{32}$/.test(md5);
};