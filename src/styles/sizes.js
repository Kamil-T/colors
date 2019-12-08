export default {
  up() {},

  down(size) {
    const sizes = {
      xs: '576px',
      sm: '768px',
      md: '992px'
    }

    return `@media (max-width: ${sizes[size]})`
  }
}
