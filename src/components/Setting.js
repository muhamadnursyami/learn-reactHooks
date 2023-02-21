import { useAppContext } from "../context.js/app-context";

export default function Setting() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const context = useAppContext();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={context.user.name ?? ""}
        onChange={(e) => {
          // Menggunakan State management function, akses contextnya. kemudia didalam context
          // kita ambil setUser dari UseState app, kita bisa menggunakan karena kita menggunakan api Context
          // kemudian kita harus copy/  clone isi context.user, didalam context terdapat user dan function setUser();
          // kemudian kita inisialisasi name, di user, kita ganti dengan e.target.value
          context.setUser({
            ...context.user,
            name: e.target.value,
          });
        }}
      />
    </div>
  );
}
