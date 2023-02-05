<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer
				v-model="drawer"
				:rail="rail"
				permanent
				@click="rail = false"
			>
				<v-list-item
					prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
					title="John Leider"
					nav
				>
					<template v-slot:append>
						<v-btn
							variant="text"
							icon="mdi-chevron-left"
							@click.stop="rail = !rail"
						></v-btn>
					</template>
				</v-list-item>

				<v-divider></v-divider>

				<v-list density="compact" nav>
					<v-list-item
						prepend-icon="mdi-home-city"
						title="Musica"
						value="Musica"
						@click="selected = 'Musica'"
					></v-list-item>
					<v-list-item
						prepend-icon="mdi-account"
						title="My Account"
						value="account"
					></v-list-item>
					<v-list-item
						prepend-icon="mdi-account-group-outline"
						title="Users"
						value="users"
					></v-list-item>
				</v-list>
			</v-navigation-drawer>
			<!-- <v-main style="height: 250px"></v-main> -->

			<MusicCom v-if="selected === 'Musica'"/>
			
		</v-layout>
	</v-card>
</template>

<script>
import MusicCom from '../Music/MusicCom.vue';
  export default {

    name:"NavComponent",
    data () {
        
      return {
		components:{
			MusicCom
		},
        drawer: true,
        items: [
          { title: 'Musica', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
          { title: 'Nota', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
		selected:null
      }
    },
  }
</script>