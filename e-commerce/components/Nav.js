import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const inactiveTab = "flex m-3 pt-2 text-4xl h-14";
  const activeTab = inactiveTab + " bg-white rounded-l-lg text-black w-full ";

  const page = useRouter();
  let dashboardTab = page.pathname === "/dashboard" ? activeTab : inactiveTab;
  let productTab = page.pathname === "/products" ? activeTab : inactiveTab;
  let settingsTab = page.pathname === "/settings" ? activeTab : inactiveTab;
  let ordersTab = page.pathname === "/orders" ? activeTab : inactiveTab;

  return (
    <aside className={"text-white w-1/5 h-screen rounded-lg m-2"}>
      <div className="flex m-3 text-5xl">
        <div className="pt-7">🛒</div>
        <span className="flex m-3">Ecommerce Admin</span>
      </div>

      <Link href={"/dashboard"} className={dashboardTab}>
        <div className="flex text-4xl">
          <div className="mx-2">🖥️</div>
          <span className="">Dashboard</span>
        </div>
      </Link>

      <Link href={"/products"} className={productTab}>
        <div className="flex text-4xl">
          <div className="mx-2">🗄️</div>
          <span className="">Products</span>
        </div>
      </Link>

      <Link href={"/settings"} className={settingsTab}>
        <div className="flex text-4xl">
          <div className="mx-2">⚙️</div>
          <span className="">Settings</span>
        </div>
      </Link>

      <Link href={"/orders"} className={ordersTab}>
        <div className="flex text-4xl">
          <div className="mx-2">📦</div>
          <span className="">Orders</span>
        </div>
      </Link>

      <button
        className={
          "bg-red-400 text-white w-30 px-4 py-2 border-gray-50 rounded-lg pd-2 ml-5 mt-3"
        }
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </aside>
  );
}
