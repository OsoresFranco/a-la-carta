export interface autoCompleteDish{
    results:[object] | [{
      vegan: string | undefined,
      healthScore: number | undefined,
      pricePerServing: number | undefined,
      id: number | undefined,
      title: string | undefined,
      readyInMinutes: number | undefined,
      sourceUrl: string | undefined,
      image: string | undefined,
    }]
  }