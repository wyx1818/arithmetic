function removeSubfolders(folder: string[]): string[] {
  folder.sort();

  const result: string[] = [];
  result.push(folder[0]);
  for (let i = 1; i < folder.length; i++) {
    if (folder[i].startsWith(result[result.length - 1]) && folder[i].charAt(result[result.length - 1].length) === "/")
      continue;
    result.push(folder[i]);
  }

  return result;
}

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
