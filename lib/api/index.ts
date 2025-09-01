export interface UserData {
  name: string;
  email: string;
  picture: string;
}

export const fetchRandomUser = async (): Promise<UserData> => {
  const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
  if (!res.ok) {
    throw new Error('خطا در دریافت اطلاعات کاربر');
  }
  const data = await res.json();
  const user = data.results[0];
  return {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    picture: user.picture.thumbnail,
  };
};
