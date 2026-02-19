//Parte baja de todo el proyecto, con informacion de contacto, redes sociales y horarios de atencion

import { Box, Container, Typography, Grid, IconButton } from "@mui/material"
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin,  } from "lucide-react"

export default function MenuFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              NombreDeEmpresa
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Confiabilidad y buena atencion.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small" sx={{ color: "white" }}>
                <Instagram size={20} onClick={() => window.open("https://www.instagram.com/nazareno_leiva_/")} />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <Phone size={20} onClick={() => window.open("")} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Horarios
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Lunes - Viernes: 12:00 - 23:00
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Sábados: 11:00 - 00:00
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Domingos: 11:00 - 22:00
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
              <MapPin size={20} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Calle xxxx, La Plata (6.500)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
              <Phone size={20} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                xxxxxxx
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Mail size={20} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                info@xxxxx.com.ar
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2026 NombreDeEmpresa. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
