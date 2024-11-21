export default async function generatePassword(): Promise<string> {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10).toString()).join('');
}
