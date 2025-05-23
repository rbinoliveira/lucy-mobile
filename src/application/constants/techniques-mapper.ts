export function techniquesMapper(key: string) {
  const items = [
    {
      key: 'name',
      value: 'Nome',
    },
    {
      key: 'summary',
      value: 'Resumo',
    },
    {
      key: 'definition',
      value: 'Definição',
    },
    {
      key: 'objective',
      value: 'Objetivo',
    },
    {
      key: 'indication',
      value: 'Indicação',
    },
    {
      key: 'description',
      value: 'Descrição',
    },
    {
      key: 'precaution',
      value: 'Precaução',
    },
    {
      key: 'example',
      value: 'Exemplo',
    },
    {
      key: 'images',
      value: 'Imagens',
    },
    {
      key: 'icon',
      value: 'Ícone',
    },
  ]

  return items.find((item) => item.key === key)?.value || key
}
