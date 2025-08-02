function PaymentButton() {
  const publicKey = 'tu_llave_publica_wompi';
  const currency = 'COP';
  const amountInCents = 50000 * 100;
  const reference = 'pedido-001';
  const redirectUrl = 'https://tusitio.com/confirmacion';

  return (
    <a
      href={`https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${currency}&amount-in-cents=${amountInCents}&reference=${reference}&redirect-url=${redirectUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
        Pagar Inscripción
      </button>
    </a>
  );
}

export default PaymentButton;
