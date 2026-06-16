'use client';

import { Hero } from '../components/home/Hero'
import { StatsSection } from '../components/home/StatsSection'
import { FeaturedCategories } from '../components/home/FeaturedCategories'
import { WhatWeOffer } from '../components/home/WhatWeOffer'
import { PopularLanguages } from '../components/home/PopularLanguages'
import { QuizGamesTools } from '../components/home/QuizGamesTools'
import { RoadmapsSection } from '../components/home/RoadmapsSection'
import { LatestArticles } from '../components/home/LatestArticles'
import { VisualCollections } from '../components/home/VisualCollections'
import { WeeklyChallenge } from '../components/home/WeeklyChallenge'
import { FounderPreview } from '../components/about/FounderSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedCategories />
      <WhatWeOffer />
      <PopularLanguages />
      <QuizGamesTools />
      <RoadmapsSection />
      <LatestArticles />
      <VisualCollections />
      <WeeklyChallenge />
      <FounderPreview />
    </>
  )
}
