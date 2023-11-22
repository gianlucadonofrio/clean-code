(() => {
  type Gender = "M" | "F";

  interface Person {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: Person) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Setting {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UseSettingProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSetting {
    public person: Person;
    public user: User;
    public setting: Setting;

    constructor({ name, gender, birthdate, email, role }: UseSettingProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.setting = new Setting({
        workingDirectory: "/home/user",
        lastOpenFolder: "/home",
      });
    }
  }

  const UserSetting1 = new UserSetting({
    workingDirectory: "/home/user",
    lastOpenFolder: "/home",
    email: "gian@gmail.com",
    role: "admin",
    name: "John Doe",
    gender: "M",
    birthdate: new Date("1980-01-01"),
  });

  console.log(UserSetting1);
})();
