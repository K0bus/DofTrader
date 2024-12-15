import { readdir } from "fs/promises";

const getDirectories = async source =>
    (await readdir(source, { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

export default {
    getDirectories
}