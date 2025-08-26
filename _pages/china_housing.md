---
title: "China Housing Price Decline"
permalink: /china_housing/
layout: single
---

<style>
/* ===== 基础样式 ===== */
.note {
  padding: 12px;
  background: #f9f9f9;
  border-left: 4px solid #1976d2;
  margin: 10px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ===== 自动夜间模式适配 ===== */
@media (prefers-color-scheme: dark) {
  .note {
    background: #2d2d2d;
    color: #e0e0e0;
    border-left-color: #64b5f6;
  }
}

/* ===== 手动夜间模式适配 ===== */
/* 适配常见的夜间模式实现方式 */
[data-theme="dark"] .note,
.dark-mode .note,
body.dark .note {
  background: #2d2d2d;
  color: #e0e0e0;
  border-left-color: #64b5f6;
}
</style>

<div class="note">
  <p>
    <strong>Note:</strong> The housing price data is based on the monthly average listing prices of second-hand homes from <em>Anjuke (安居客)</em>.
  </p>
  <p>
    <strong>Definition of decline:</strong> The percentage drop is measured from each city's peak price between 2010 and 2025 down to the value in July 2025.
  </p>
  <p>
    <strong>Tip:</strong> Click a city block to view details including the peak year and price, decline percentage from peak to July 2025, and nationwide decline ranking.
  </p>
</div>

<iframe src="/files/index.html" width="100%" height="620px" style="border:none; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);"></iframe>