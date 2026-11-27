'use strict';

// Toda a demonstração usa cenários locais e fictícios. Nenhuma API é consultada.
const products = [
  { name: 'Fone Bluetooth Pulse', category: 'Eletrônicos', icon: '◖◗', price: 189.90, cost: 89.90, expenses: 37.98, stock: 128, trend: 18.4 },
  { name: 'Kit organizador de mesa', category: 'Casa e cozinha', icon: '▤', price: 89.90, cost: 38.50, expenses: 19.78, stock: 245, trend: 12.7 },
  { name: 'Suporte articulado Pro', category: 'Acessórios', icon: '⌐', price: 129.90, cost: 57.90, expenses: 25.98, stock: 86, trend: 9.2 },
  { name: 'Garrafa térmica 750 ml', category: 'Casa e cozinha', icon: '▯', price: 119.90, cost: 59.90, expenses: 23.98, stock: 172, trend: 15.6 },
  { name: 'Teclado sem fio Compact', category: 'Eletrônicos', icon: '▦', price: 219.90, cost: 119.90, expenses: 43.98, stock: 64, trend: 6.8 },
  { name: 'Hub USB 4 portas', category: 'Acessórios', icon: '⊞', price: 79.90, cost: 43.90, expenses: 17.58, stock: 210, trend: -2.3 }
];
const scenarios = {
  30: { multiplier: 1, trends: 1, prices: [128, 137, 132, 144, 140, 148, 143, 152, 146, 154, 149, 155, 151, 158, 153, 160, 156, 162, 157, 165, 161, 166, 163, 168, 165, 171, 166, 172, 169, 173], costs: [70, 74, 71, 76, 74, 77, 74, 80, 77, 79, 76, 81, 79, 83, 80, 83, 80, 85, 82, 86, 83, 86, 84, 88, 85, 88, 85, 90, 87, 89] },
  7: { multiplier: .97, trends: .4, prices: [160, 165, 162, 168, 164, 171, 168], costs: [84, 86, 85, 88, 86, 89, 87] }
};
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const decimal = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
let period = 30;
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const sort = document.querySelector('#sort');

function currentProducts() {
  return products.map(product => {
    const price = Math.round(product.price * scenarios[period].multiplier * 100) / 100;
    const profit = Math.round((price - product.cost - product.expenses) * 100) / 100;
    return { ...product, price, profit, margin: profit / price * 100, trend: product.trend * scenarios[period].trends };
  });
}

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
}

function renderRanking() {
  const query = normalize(search.value.trim());
  const filtered = currentProducts().filter(product =>
    (category.value === 'all' || product.category === category.value) && normalize(product.name).includes(query)
  );
  const field = sort.value;
  filtered.sort((a, b) => field === 'price' ? a.price - b.price : b[field] - a[field]);
  // Apenas valores do catálogo local entram no HTML; a pesquisa não é interpolada.
  document.querySelector('#opportunities').innerHTML = filtered.map(product => `
    <tr>
      <td><div class="product-cell"><span class="product-icon" aria-hidden="true">${product.icon}</span><div><span class="product-name">${product.name}</span><span class="product-category">${product.category}</span></div></div></td>
      <td>${currency.format(product.price)}</td><td>${currency.format(product.cost)}</td><td>${currency.format(product.expenses)}</td>
      <td>${currency.format(product.profit)}</td><td><span class="margin-badge">${decimal.format(product.margin)}%</span></td>
      <td class="stock">${product.stock} un.</td><td class="trend${product.trend < 0 ? ' down' : ''}">${product.trend < 0 ? '↘' : '↗'} ${product.trend > 0 ? '+' : ''}${decimal.format(product.trend)}%</td>
    </tr>`).join('');
  document.querySelector('#results-count').textContent = `${filtered.length} de ${products.length} produtos`;
  document.querySelector('#empty-state').hidden = filtered.length !== 0;
}

function renderMetrics() {
  const items = currentProducts();
  const average = key => items.reduce((total, item) => total + item[key], 0) / items.length;
  const metrics = [
    ['Margem média estimada', `${decimal.format(average('margin'))}%`, 'Média simples do catálogo', '◴'],
    ['Preço médio de venda', currency.format(average('price')), 'Cenário de preços fictícios', '↗'],
    ['Custo médio do produto', currency.format(average('cost')), 'Sem despesas adicionais', '▧'],
    ['Produtos no radar', String(items.length).padStart(2, '0'), '3 categorias demonstrativas', '◎']
  ];
  document.querySelector('#metrics').innerHTML = metrics.map(([label, value, detail, symbol]) => `<article class="metric"><div class="metric-label">${label}<span class="metric-symbol" aria-hidden="true">${symbol}</span></div><div class="metric-value">${value}</div><div class="metric-detail">${detail}</div></article>`).join('');
}

function renderChart() {
  const data = scenarios[period];
  const x = index => 47 + index / (data.prices.length - 1) * 565;
  const y = value => 207 - (value - 40) / 160 * 175;
  const points = values => values.map((value, index) => `${x(index).toFixed(1)},${y(value).toFixed(1)}`).join(' ');
  const priceLine = points(data.prices);
  const grid = [50, 100, 150, 200].map(value => `<line x1="47" y1="${y(value)}" x2="612" y2="${y(value)}" stroke="#2a3a30" stroke-dasharray="3 5"/><text x="0" y="${y(value) + 4}">${value}</text>`).join('');
  const labels = period === 30 ? ['Dia 1', 'Dia 6', 'Dia 12', 'Dia 18', 'Dia 24', 'Dia 30'] : ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 7'];
  document.querySelector('#chart').innerHTML = `<svg viewBox="0 0 636 252" role="img" aria-labelledby="chart-title chart-desc"><title id="chart-title">Preços e custos fictícios ao longo de ${period} dias</title><desc id="chart-desc">Série ilustrativa independente do catálogo: venda de ${currency.format(data.prices[0])} a ${currency.format(data.prices.at(-1))}; custo de ${currency.format(data.costs[0])} a ${currency.format(data.costs.at(-1))}. Eixo vertical em reais. Não são dados reais.</desc><defs><linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#76e6b5" stop-opacity=".18"/><stop offset="100%" stop-color="#76e6b5" stop-opacity="0"/></linearGradient></defs><text x="0" y="14">R$</text>${grid}<polygon points="47,217 ${priceLine} 612,217" fill="url(#area-fill)"/><polyline points="${priceLine}" fill="none" stroke="#76e6b5" stroke-width="2.5" stroke-linejoin="round"/><polyline points="${points(data.costs)}" fill="none" stroke="#729aaf" stroke-width="2" stroke-dasharray="5 5" stroke-linejoin="round"/>${labels.map((label, index) => `<text x="${47 + index * 113}" y="245" text-anchor="${index === 0 ? 'start' : index === 5 ? 'end' : 'middle'}">${label}</text>`).join('')}</svg>`;
}

function render() { renderMetrics(); renderChart(); renderRanking(); }
search.addEventListener('input', renderRanking);
category.addEventListener('change', renderRanking);
sort.addEventListener('change', renderRanking);
document.querySelectorAll('[data-period]').forEach(button => button.addEventListener('click', () => {
  period = Number(button.dataset.period);
  document.querySelectorAll('[data-period]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  render();
}));
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
});
render();
