using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiTropical.Context;
using ApiTropical.Models;

namespace ApiTropical.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacoteDeViagensController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public PacoteDeViagensController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/PacoteDeViagens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PacoteDeViagem>>> GetpacoteDeViagems()
        {
            return await _context.PacoteDeViagems.ToListAsync();
        }

        // GET: api/PacoteDeViagens/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PacoteDeViagem>> GetPacoteDeViagem(int id)
        {
            var pacoteDeViagem = await _context.PacoteDeViagems.FindAsync(id);

            if (pacoteDeViagem == null)
            {
                return NotFound();
            }

            return pacoteDeViagem;
        }

        // PUT: api/PacoteDeViagens/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPacoteDeViagem(int id, PacoteDeViagem pacoteDeViagem)
        {
            if (id != pacoteDeViagem.Id)
            {
                return BadRequest();
            }

            _context.Entry(pacoteDeViagem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PacoteDeViagemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PacoteDeViagens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PacoteDeViagem>> PostPacoteDeViagem(PacoteDeViagem pacoteDeViagem)
        {
            _context.PacoteDeViagems.Add(pacoteDeViagem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPacoteDeViagem", new { id = pacoteDeViagem.Id }, pacoteDeViagem);
        }

        // DELETE: api/PacoteDeViagens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePacoteDeViagem(int id)
        {
            var pacoteDeViagem = await _context.PacoteDeViagems.FindAsync(id);
            if (pacoteDeViagem == null)
            {
                return NotFound();
            }

            _context.PacoteDeViagems.Remove(pacoteDeViagem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PacoteDeViagemExists(int id)
        {
            return _context.PacoteDeViagems.Any(e => e.Id == id);
        }
    }
}
