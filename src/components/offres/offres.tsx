import OffersForm from "./offers-form";

export default function Offres() {
  return (
    <div>
      <div className="wrapper flex  flex-col items-center gap-[5rem]">
        <h2 className=" text-center">Personnalisez votre forfait N'YOOZ</h2>
        <OffersForm />
      </div>
    </div>
  );
}
