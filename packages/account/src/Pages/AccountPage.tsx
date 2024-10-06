import React from "react";
import { useSelector } from "react-redux";
import { State } from "authApp/RootState";

function AccountPage() {
  // Auth bilgilerini Redux store'dan alıyoruz

  const auth = useSelector((state: State) => state.auth);
  return auth.isAuthenticated ? (
    <div className="truncate flex items-center justify-center">
      <pre className="max-w-full overflow-x-auto whitespace-pre-wrap">{JSON.stringify(auth.user, null, 2)}</pre>
    </div>
  ) : (
    <div className="flex w-full h-full items-center justify-center text-2xl font-semibold">
      {" "}
      Kullanıcı Girişi Yapılmamış Lütfen Giriş Yapınız{" "}
    </div>
  );
}

export default AccountPage;
