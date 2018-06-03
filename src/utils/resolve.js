export default function resolve(root, currentPath) {
  const r = new RegExp(`^${ root }`);
  const path = currentPath.split(r)[1];

  // if (path)
}