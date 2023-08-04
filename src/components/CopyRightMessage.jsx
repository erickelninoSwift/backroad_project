export function CopyRights({ mycopyRight, NameCompany }) {
  return (
    <p className="copyright">
      {mycopyRight} &copy; {NameCompany}
      <span id="date">{`${new Date().getFullYear()}`}</span> all rights reserved
    </p>
  );
}
