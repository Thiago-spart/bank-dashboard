export function formatValues(price: number) {
	const newPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

	return newPrice
}