
function searchRegex(value: string): { $regex: string; $options: string } {
    return { $regex: value, $options: "i" };
}

function validObjectId(string: string): boolean {
    return /^[0-9a-fA-F]{24}$/.test(string);
}

export default {
    searchRegex,
    validObjectId,
};