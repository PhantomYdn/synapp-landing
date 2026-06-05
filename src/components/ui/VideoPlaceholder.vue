<template>
  <div class="video-placeholder" :class="{ 'video-placeholder--embed': videoUrl }">
    <!-- Embed mode: real YouTube video -->
    <iframe
      v-if="videoUrl"
      :src="videoUrl"
      :title="title || 'SynApp product demo'"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video-embed"
    ></iframe>

    <!-- Thumbnail mode: placeholder until video is ready -->
    <template v-else>
      <div class="video-placeholder__bg">
        <div class="video-placeholder__grid" aria-hidden="true"></div>
        <!-- Decorative UI elements -->
        <div class="mock-ui" aria-hidden="true">
          <div class="mock-ui__bar">
            <div class="mock-ui__dot" style="background:#EC4799"></div>
            <div class="mock-ui__dot" style="background:#F59E0B"></div>
            <div class="mock-ui__dot" style="background:#10B981"></div>
            <div class="mock-ui__title">SynApp Dashboard</div>
          </div>
          <div class="mock-ui__body">
            <div class="mock-ui__sidebar">
              <div class="mock-sidebar-item mock-sidebar-item--active"></div>
              <div class="mock-sidebar-item"></div>
              <div class="mock-sidebar-item"></div>
              <div class="mock-sidebar-item"></div>
            </div>
            <div class="mock-ui__content">
              <div class="mock-table-row mock-table-row--header"></div>
              <div class="mock-table-row"></div>
              <div class="mock-table-row mock-table-row--highlight"></div>
              <div class="mock-table-row"></div>
              <div class="mock-table-row"></div>
              <div class="mock-table-row"></div>
            </div>
          </div>
        </div>
      </div>
      <button class="video-placeholder__play" aria-label="Play product demo video (coming soon)">
        <span class="play-ring" aria-hidden="true"></span>
        <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      <div class="video-placeholder__label">
        <span class="video-placeholder__label-text">Product Demo — Coming Soon</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    videoUrl?: string | null
    title?: string
  }>(),
  { videoUrl: null }
)
</script>

<style scoped>
.video-placeholder {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(15, 165, 233, 0.06);
}

.video-embed {
  width: 100%;
  height: 100%;
  border: none;
}

/* Placeholder bg */
.video-placeholder__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.video-placeholder__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Mock UI inside the placeholder */
.mock-ui {
  position: absolute;
  inset: 12%;
  background: rgba(16, 23, 43, 0.8);
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mock-ui__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(8, 11, 23, 0.6);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
}

.mock-ui__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.8;
}

.mock-ui__title {
  margin-left: 8px;
  font-size: 10px;
  color: rgba(255,255,255,0.3);
  font-family: var(--font-body);
}

.mock-ui__body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.mock-ui__sidebar {
  width: 20%;
  border-right: 1px solid rgba(255,255,255,0.05);
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}

.mock-sidebar-item {
  height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px;
}

.mock-sidebar-item--active {
  background: rgba(15, 165, 233, 0.3);
}

.mock-ui__content {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.mock-table-row {
  height: 12px;
  background: rgba(255,255,255,0.04);
  border-radius: 3px;
}

.mock-table-row--header {
  background: rgba(255,255,255,0.08);
  height: 14px;
}

.mock-table-row--highlight {
  background: rgba(15, 165, 233, 0.1);
}

/* Play button */
.video-placeholder__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: default;
  z-index: 2;
}

.play-ring {
  position: absolute;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(15, 165, 233, 0.15);
  border: 1.5px solid rgba(15, 165, 233, 0.35);
  backdrop-filter: blur(8px);
}

.play-icon {
  position: relative;
  width: 28px;
  height: 28px;
  color: var(--color-accent-blue);
  margin-left: 4px;
}

/* Label */
.video-placeholder__label {
  position: absolute;
  bottom: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.video-placeholder__label-text {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: rgba(8, 11, 23, 0.8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  font-family: var(--font-body);
  white-space: nowrap;
  backdrop-filter: blur(8px);
}
</style>
