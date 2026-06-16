# Império Vimercati PDV

PDV PWA em HTML, CSS e JavaScript puro para a hamburgueria **Império Vimercati** — “O sabor que reina!”. Funciona em GitHub Pages, offline e com dados operacionais no IndexedDB do navegador.

## Identidade
- Responsável: Letícia
- Instagram: @imperiovimercati
- WhatsApp: 5527992390217
- Tema premium preto/dourado, responsivo e mobile-first.

## Recursos
- Dashboard com vendas, pedidos, ticket médio, lucro estimado, canais, alertas e gráficos Canvas.
- PDV para balcão, delivery, retirada, mesa e comanda.
- Remoção de ingredientes, adicionais, ponto da carne, combos, desconto, taxa, pagamento e troco.
- Número de pedido `IVM-AAAAMMDD-HHMMSS-XXX`.
- KDS/cozinha com status Novo, Em preparo, Pronto e Finalizado.
- Delivery/motoboy com link WhatsApp e Google Maps.
- Clientes/CRM, produtos, categorias, insumos, ficha técnica, baixa automática e movimentos de estoque.
- Caixa, relatórios CSV/JSON, insights locais, impressão 80mm e backup/restauração.
- PWA offline com service worker.

## Instalação no GitHub Pages
1. Envie estes arquivos para um repositório GitHub.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch principal e a pasta `/root`.
5. Acesse a URL publicada e instale como app pelo navegador.

## Login local
PINs de demonstração:
- Admin: `1234`
- Caixa: `2222`
- Cozinha: `3333`
- Motoboy: `4444`
- Visualização: `0000`

Segurança real multiusuário exige backend. O PIN local é uma barreira operacional para dispositivo compartilhado, não autenticação forte.

## Dados e backup
- Operação diária: IndexedDB no dispositivo.
- Preferências leves: LocalStorage/sessionStorage.
- Seeds e estrutura de backup: `/database`.
- Exportações: use **Configurações > Exportar tudo** e **Relatórios > Exportar vendas CSV**.

## Limitações honestas
Este app não implementa NFC-e fiscal real, TEF real, integração iFood real, impressão silenciosa automática ou commits diretos no GitHub pelo navegador. Esses recursos exigem backend seguro, APIs oficiais, homologação fiscal, drivers ou aplicativos externos.
