export default function sleeper(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
