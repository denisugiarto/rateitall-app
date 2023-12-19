<script setup lang="ts">
import { MessageSquareText } from 'lucide-vue-next';
import { Button } from './components/ui/button';
import { Card, CardHeader } from './components/ui/card';
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
</script>

<template>
	<div class="min-h-screen w-screen bg-slate-100">
		<div class="container">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-8 pt-8 px-20 relative">
				<Card class="lg:col-span-2 rounded-3xl">
					<CardHeader class="items-center space-y-4">
						<img src="/donald trump.png" height="300" width="300" class="rounded-3xl border-4 border-blue-500" />
						<h1 class="font-bold text-3xl">Barack Obama</h1>
						<p class="text-2xl text-center">
							American former politician who served as the 44th president of the United States from 2009 to 2017
						</p>
					</CardHeader>
				</Card>
				<div class="flex flex-col gap-y-6">
					<Button variant="outline" size="lg" class="w-full">
						<img src="/icon-double-like.jpg" height="72" width="72" />
						Double like
					</Button>
					<Button variant="outline" size="lg" class="w-full">
						<img src="/icon-single-like.jpg" height="72" width="72" />
						Single like
					</Button>
					<Button variant="outline" size="lg" class="w-full">
						<img src="/icon-mixed-rating.jpg" height="72" width="72" />
						Mixed rating
					</Button>
					<Button variant="outline" size="lg" class="w-full">
						<img src="/icon-single-dislike.jpg" height="72" width="72" />
						Single dislike
					</Button>
					<Button variant="outline" size="lg" class="w-full">
						<img src="/icon-double-dislike.jpg" height="72" width="72" />
						Double dislike
					</Button>
					<Button variant="outline" size="lg" class="border-green-700 text-green-700 font-bold bg-transparent justify-center rounded-xl hover:bg-green-700 hover:text-white ">
						<MessageSquareText :size="24" />
						Write a review
					</Button>
					<Button variant="text" size="lg" class="text-slate-300 justify-center rounded-xl hover:text-slate-700 hover:border-slate-700">No Rating (Skip)</Button>
				</div>
				<Button variant="outline" size="icon" class="absolute top-1/2 left-0 justify-center bg-transparent rounded-xl" disabled
					><ChevronLeft
				/></Button>
				<Button
					variant="outline"
					size="icon"
					class="absolute top-1/2 right-0 justify-center bg-transparent text-emerald-600 rounded-xl border-emerald-600 hover:text-slate-50 hover:bg-emerald-600"
					><ChevronRight
				/></Button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
