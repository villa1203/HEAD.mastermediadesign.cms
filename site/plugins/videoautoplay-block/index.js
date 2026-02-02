panel.plugin('custom/videoautoplay-block', {
  blocks: {
    videoautoplay: {
      template: `
        <div class="k-block-videoautoplay">
          <h2 v-if="content.titre" class="k-block-videoautoplay-title">
            {{ content.titre }}
          </h2>
          <div v-if="videoUrl" class="k-block-videoautoplay-preview">
            <video
              :src="videoUrl"
              autoplay
              muted
              loop
              playsinline
              class="k-block-videoautoplay-video"
            ></video>
          </div>
          <div v-else class="k-block-videoautoplay-empty">
            <k-icon type="video" />
            <span>Aucune vidéo sélectionnée</span>
          </div>
        </div>
      `,
      computed: {
        videoUrl() {
          if (this.content.fichier && this.content.fichier.length > 0) {
            return this.content.fichier[0].url;
          }
          return null;
        }
      }
    }
  }
});
